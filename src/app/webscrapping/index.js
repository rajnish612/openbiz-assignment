import puppeteer from "puppeteer";
import fs from "fs";
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.goto("https://udyamregistration.gov.in/UdyamRegistration.aspx", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  const inputs = await page.evaluate(() => {
    const fields = [];
    const allInputs = document.querySelectorAll("input");

    allInputs.forEach((input) => {
      const type = input.type || "text";

      // Skip hidden fields
      if (type === "hidden") return;

      // Try to get label from <label for="">
      let labelText = "";
      if (input.id) {
        const label = document.querySelector(`label[for='${input.id}']`);
        if (label) {
          labelText = label.innerText.trim();
        }
      }

      // If still empty, try placeholder
      if (!labelText && input.placeholder) {
        labelText = input.placeholder.trim();
      }

      // If still empty, check nearby text nodes
      if (!labelText) {
        const parentText = input.parentElement?.innerText || "";
        if (parentText && parentText.trim() !== "") {
          labelText = parentText.trim();
        }
      }

      // Skip meaningless checkbox without label
      if (type === "checkbox" && !labelText) return;

      fields.push({
        tag: input.tagName.toLowerCase(),
        type,
        id: input.id || null,
        name: input.name || null,
        placeholder: input.placeholder || null,
        required: input.required || false,
        label: labelText || null,
        pattern: input.pattern || null,
        maxlength: input.maxLength > 0 ? input.maxLength : null,
        value: input.value || null,
      });
    });

    return fields;
  });
  console.log("fields", inputs);

  fs.writeFileSync("formFields.json", JSON.stringify(inputs, null, 2));

  await browser.close();
})();

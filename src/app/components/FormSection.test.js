import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormSection from "./FormSection";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ success: true }),
    })
  );
  window.alert = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("FormSection Component", () => {
  test("shows validation errors for empty and invalid Aadhaar input", async () => {
    render(<FormSection />);

    fireEvent.change(screen.getByLabelText(/your aadhaar no/i), {
      target: { value: "123456" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /validate & generate otp/i })
    );

    expect(
      await screen.findByText(/aadhaar must be 12 digits/i)
    ).toBeInTheDocument();

    expect(screen.getByText("this field is required")).toBeInTheDocument();

    expect(
      screen.getByText("You must Agree Declerations.")
    ).toBeInTheDocument();
  });

  test("submits form successfully with valid inputs", async () => {
    render(<FormSection />);

    const aadhaarInput = screen.getByPlaceholderText("Your Aadhaar No");
    fireEvent.change(aadhaarInput, { target: { value: "123456789012" } });

    const nameInput = screen.getByPlaceholderText("Name as per Aadhaar");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const checkbox = screen.getByLabelText(
      /I, the holder of the above Aadhaar/i
    );
    fireEvent.click(checkbox);

    const submitBtn = screen.getByRole("button", {
      name: "Validate & Generate OTP",
    });
    fireEvent.click(submitBtn);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/submit",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.any(String),
      })
    );

    const fetchCallBody = JSON.parse(global.fetch.mock.calls[0][1].body);
    expect(fetchCallBody).toMatchObject({
      aadhar: "123456789012",
      name: "John Doe",
      checked: true,
    });
  });

  test("validates OTP input and shows alert on invalid OTP", () => {
    render(<FormSection />);

    const otpInput = screen.getByPlaceholderText("OTP");

    const validateOtpBtn = screen
      .getAllByRole("button")
      .find((btn) => btn.getAttribute("value") === "validate");

    fireEvent.change(otpInput, { target: { value: "123" } });
    fireEvent.click(validateOtpBtn);

    expect(window.alert).toHaveBeenCalledWith("Fill the otp");

    fireEvent.change(otpInput, { target: { value: "123456" } });
    fireEvent.click(validateOtpBtn);

    expect(window.alert).toHaveBeenCalledWith(
      "Your registration is successfull"
    );
  });
});

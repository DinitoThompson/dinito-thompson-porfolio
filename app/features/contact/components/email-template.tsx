import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, email, message }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div
      style={{
        backgroundColor: "#4a5568",
        color: "white",
        padding: "20px",
        borderRadius: "8px 8px 0 0",
        textAlign: "center" as const,
      }}
    >
      <h1 style={{ margin: "0", fontSize: "24px" }}>
        New Contact Form Submission
      </h1>
    </div>
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "0 0 8px 8px",
      }}
    >
      <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4a5568" }}>
        You have received a new message from your portfolio website&apos;s
        contact form:
      </p>
      <div
        style={{
          backgroundColor: "#edf2f7",
          padding: "15px",
          borderRadius: "6px",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#4a5568" }}>
          <strong style={{ color: "#2d3748" }}>Name:</strong> {name}
        </p>
        <p style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#4a5568" }}>
          <strong style={{ color: "#2d3748" }}>Email:</strong> {email}
        </p>
      </div>
      <h2 style={{ fontSize: "20px", color: "#2d3748", marginBottom: "10px" }}>
        Message:
      </h2>
      <div
        style={{
          backgroundColor: "#edf2f7",
          padding: "15px",
          borderRadius: "6px",
          whiteSpace: "pre-wrap",
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#4a5568",
          }}
        >
          {message}
        </p>
      </div>
    </div>
    <div
      style={{
        marginTop: "20px",
        textAlign: "center" as const,
        fontSize: "14px",
        color: "#718096",
      }}
    >
      <p>
        This email was sent from your portfolio website&apos;s contact form.
      </p>
    </div>
  </div>
);

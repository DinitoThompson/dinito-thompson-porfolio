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
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: "640px",
      margin: "0 auto",
      padding: "0",
      backgroundColor: "#0f172a", // gray-950
      borderRadius: "12px",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    }}
  >
    {/* Header */}
    <div
      style={{
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", // gray-800 to gray-950
        color: "#f1f5f9", // gray-100
        padding: "32px 24px",
        textAlign: "center" as const,
        borderBottom: "1px solid #334155", // gray-700
      }}
    >
      <h1
        style={{
          margin: "0 0 8px 0",
          fontSize: "28px",
          fontWeight: "600",
          letterSpacing: "-0.025em",
        }}
      >
        New Portfolio Inquiry
      </h1>
      <p
        style={{
          margin: "0",
          fontSize: "16px",
          color: "#94a3b8", // gray-400
          fontWeight: "400",
        }}
      >
        Contact form submission from dinitothompson.dev
      </p>
    </div>

    {/* Content */}
    <div
      style={{
        padding: "32px 24px",
        backgroundColor: "#1e293b", // gray-800
      }}
    >
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#cbd5e1", // gray-300
          margin: "0 0 24px 0",
        }}
      >
        You have received a new message through your portfolio website&apos;s
        contact form:
      </p>

      {/* Contact Details Card */}
      <div
        style={{
          backgroundColor: "#0f172a", // gray-950
          border: "1px solid #334155", // gray-700
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "24px",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "12px",
              fontWeight: "500",
              color: "#64748b", // gray-500
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Contact Information
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#3b82f6", // blue-500
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: "0",
              }}
            >
              <span
                style={{ color: "white", fontSize: "14px", fontWeight: "500" }}
              >
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p
                style={{
                  margin: "0",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#f1f5f9",
                }}
              >
                {name}
              </p>
              <p style={{ margin: "0", fontSize: "14px", color: "#94a3b8" }}>
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Content */}
      <div
        style={{
          backgroundColor: "#0f172a", // gray-950
          border: "1px solid #334155", // gray-700
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <p
            style={{
              margin: "0",
              fontSize: "12px",
              fontWeight: "500",
              color: "#64748b", // gray-500
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Message
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#1e293b", // gray-800
            borderRadius: "6px",
            padding: "16px",
            border: "1px solid #475569", // gray-600
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "15px",
              lineHeight: "1.7",
              color: "#cbd5e1", // gray-300
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        padding: "24px",
        backgroundColor: "#0f172a", // gray-950
        borderTop: "1px solid #334155", // gray-700
        textAlign: "center" as const,
      }}
    >
      <p
        style={{
          margin: "0 0 8px 0",
          fontSize: "14px",
          color: "#64748b", // gray-500
        }}
      >
        This email was generated automatically from your portfolio website
      </p>
      <p
        style={{
          margin: "0",
          fontSize: "12px",
          color: "#475569", // gray-600
        }}
      >
        dinitothompson.dev • Portfolio Contact Form
      </p>
    </div>
  </div>
);

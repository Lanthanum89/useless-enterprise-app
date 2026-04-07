import React from "react";

export default function UselessEnterpriseApp() {
  const randomMessages = [
    "Optimising synergy...",
    "Consulting the alignment committee...",
    "Reassessing stakeholder feelings...",
    "Running absolutely essential nonsense...",
    "Escalating to the Department of Vibes..."
  ];

  const fakeErrors = [
    "Error: Success could not be completed successfully.",
    "Validation failed. Reason: Too valid.",
    "Access denied. You seem suspiciously competent.",
    "Submission blocked pending approval from the moon.",
    "System busy pretending to work."
  ];

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [name, setName] = React.useState("");
  const [department, setDepartment] = React.useState("Operations");
  const [status, setStatus] = React.useState("Awaiting pointless input...");
  const [saving, setSaving] = React.useState(false);
  const [moved, setMoved] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [requiredFieldAppeared, setRequiredFieldAppeared] = React.useState(false);
  const [approvalCode, setApprovalCode] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);

  const handleSaveHover = () => {
    setMoved(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);

    if (!requiredFieldAppeared) {
      setRequiredFieldAppeared(true);
      setStatus("New mandatory field detected. Very efficient.");
      return;
    }

    if (!approvalCode.trim()) {
      setStatus("Submission blocked. Please provide the Approval Readiness Reference Code that definitely existed all along.");
      return;
    }

    setSaving(true);
    setStatus(getRandom(randomMessages));

    setTimeout(() => {
      setSaving(false);
      setStatus(getRandom(fakeErrors));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2800);
    }, 1800);
  };

  const saveStyle = moved
    ? { transform: "translateX(90px) translateY(-14px) rotate(4deg) scale(1.03)" }
    : { transform: "translateX(0px) rotate(0deg)" };

  return (
    <div
      className="min-h-screen p-6 md:p-10"
      style={{
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        background:
          "repeating-linear-gradient(45deg, #ffd6f6 0px, #ffd6f6 30px, #c8f7ff 30px, #c8f7ff 60px, #fff3a6 60px, #fff3a6 90px, #d8ffc4 90px, #d8ffc4 120px)"
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="mb-6 border-[6px] p-6 shadow-[12px_12px_0px_#ff66c4]"
          style={{
            background: "#fff0ff",
            borderColor: "#00c2ff",
            borderRadius: "28px"
          }}
        >
          <marquee className="mb-3 text-lg font-bold text-fuchsia-700 scroll-m-0">
            ✨ WELCOME TO THE OFFICIAL BUSINESS REQUEST ALIGNMENT ZONE ✨
          </marquee>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">
            Synergex Enterprise Portal 2004 Deluxe Edition
          </p>
          <h1
            className="mt-2 text-4xl font-bold md:text-5xl"
            style={{
              color: "#ff1493",
              textShadow: "3px 3px 0 #ffff66, 6px 6px 0 #00e5ff"
            }}
          >
            Business Request Alignment Interface
          </h1>
          <p className="mt-3 max-w-3xl text-lg font-bold text-lime-700">
            A serious platform for serious professionals doing serious things, badly.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {[
            ["Visitors Today", "000042"],
            ["Corporate Mood", "Chaotic"],
            ["Server Energy", "Unsettling"],
            ["Certified Since", "2003"]
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-[5px] p-4 text-center shadow-[8px_8px_0px_#8a2be2]"
              style={{
                background: "#ffffcc",
                borderColor: "#ff8c00",
                borderRadius: "20px"
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{label}</p>
              <p className="mt-2 text-3xl font-bold text-fuchsia-600">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr]">
          <div
            className="border-[6px] p-6 shadow-[12px_12px_0px_#00d9ff]"
            style={{
              background: "#ffe4fa",
              borderColor: "#ff5ec4",
              borderRadius: "30px"
            }}
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-cyan-700">📝 New Strategic Request</h2>
              <span
                className="px-4 py-2 text-sm font-bold"
                style={{
                  background: "#ffff66",
                  color: "#ff1493",
                  border: "4px dashed #ff1493",
                  borderRadius: "999px"
                }}
              >
                Priority: NEEDLESSLY HIGH!!!
              </span>
            </div>

            <div className="grid gap-5">
              <label className="grid gap-2 text-base font-bold text-fuchsia-700">
                Full Name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="px-4 py-3 text-lg outline-none"
                  style={{
                    borderRadius: "18px",
                    border: "4px solid #00c2ff",
                    background: "#fff9c4",
                    color: "#d414a3",
                    boxShadow: "6px 6px 0 #ff8ad8"
                  }}
                />
              </label>

              <label className="grid gap-2 text-base font-bold text-fuchsia-700">
                Department
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="px-4 py-3 text-lg outline-none"
                  style={{
                    borderRadius: "18px",
                    border: "4px solid #8a2be2",
                    background: "#d6fffb",
                    color: "#ff1493",
                    boxShadow: "6px 6px 0 #fff066"
                  }}
                >
                  <option>Operations</option>
                  <option>Strategy</option>
                  <option>Innovation Theatre</option>
                  <option>Spreadsheet Recovery</option>
                  <option>Executive Vibes</option>
                </select>
              </label>

              <label className="grid gap-2 text-base font-bold text-fuchsia-700">
                Request Summary
                <textarea
                  placeholder="Explain what you need in a way the system can ignore"
                  className="min-h-36 px-4 py-3 text-lg outline-none"
                  style={{
                    borderRadius: "18px",
                    border: "4px dotted #ff8c00",
                    background: "#e5ffcc",
                    color: "#7a00cc",
                    boxShadow: "6px 6px 0 #00e5ff"
                  }}
                />
              </label>

              {requiredFieldAppeared && (
                <label
                  className="grid gap-2 p-4 text-base font-bold"
                  style={{
                    borderRadius: "22px",
                    border: "5px dashed #ff0000",
                    background: "#fff0f6",
                    color: "#d60087",
                    boxShadow: "8px 8px 0 #ffff66"
                  }}
                >
                  🚨 Newly Mandatory Approval Readiness Reference Code 🚨
                  <input
                    value={approvalCode}
                    onChange={(e) => setApprovalCode(e.target.value)}
                    placeholder="This was not here a second ago"
                    className="px-4 py-3 text-lg outline-none"
                    style={{
                      borderRadius: "18px",
                      border: "4px solid #ff1493",
                      background: "#d9ffff",
                      color: "#7a00cc"
                    }}
                  />
                </label>
              )}

              <div className="pt-3">
                <button
                  onMouseEnter={handleSaveHover}
                  onClick={handleSubmit}
                  style={{
                    ...saveStyle,
                    borderRadius: "24px",
                    background: "linear-gradient(90deg, #ff66c4, #fff066, #66f7ff)",
                    color: "#7a007a",
                    border: "5px solid #8a2be2",
                    boxShadow: "10px 10px 0 #ff8c00"
                  }}
                  className="px-8 py-4 text-xl font-bold transition duration-300"
                >
                  {saving ? "Pretending to save..." : moved ? "Catch Me First" : "Save Request"}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="border-[6px] p-6 shadow-[12px_12px_0px_#ff69b4]"
              style={{
                background: "#dffcff",
                borderColor: "#ffd700",
                borderRadius: "30px"
              }}
            >
              <h3 className="text-2xl font-bold text-fuchsia-700">💻 Live System Status</h3>
              <div
                className="mt-4 p-4 text-base font-bold"
                style={{
                  borderRadius: "20px",
                  background: "#fff9b1",
                  color: "#0080c8",
                  border: "4px dotted #ff1493"
                }}
              >
                {status}
              </div>
              <div
                className="mt-4 h-6 overflow-hidden"
                style={{
                  borderRadius: "999px",
                  background: "#ffffff",
                  border: "4px solid #8a2be2"
                }}
              >
                <div
                  className={`h-full transition-all duration-700 ${saving ? "w-2/3" : submitted ? "w-11/12" : "w-1/4"}`}
                  style={{
                    background: "repeating-linear-gradient(90deg, #ff66c4 0px, #ff66c4 18px, #66f7ff 18px, #66f7ff 36px, #fff066 36px, #fff066 54px)"
                  }}
                />
              </div>
              <p className="mt-3 text-sm font-bold text-lime-700">
                Progress bar not linked to anything. Obviously.
              </p>
            </div>

            <div
              className="border-[6px] p-6 shadow-[12px_12px_0px_#00c2ff]"
              style={{
                background: "#fff0b8",
                borderColor: "#ff5ec4",
                borderRadius: "30px"
              }}
            >
              <h3 className="text-2xl font-bold text-cyan-700">📊 Performance Metrics</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["Efficiency", "14%", "#ffe4fa", "#ff1493"],
                  ["Confusion", "97%", "#d6fffb", "#00a6ff"],
                  ["Alignment", "Unknown", "#e5ffcc", "#8a2be2"],
                  ["Trust", "Declining", "#fff9c4", "#ff8c00"]
                ].map(([label, value, bg, colour]) => (
                  <div
                    key={label}
                    className="p-4"
                    style={{
                      borderRadius: "18px",
                      background: bg,
                      border: `4px solid ${colour}`,
                      boxShadow: `6px 6px 0 ${colour}`
                    }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-700">{label}</p>
                    <p className="mt-2 text-2xl font-bold" style={{ color: colour }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-6 border-[6px] p-4 text-center shadow-[10px_10px_0px_#ff1493]"
          style={{
            background: "#d9ffff",
            borderColor: "#7fff00",
            borderRadius: "24px"
          }}
        >
          <p className="text-lg font-bold text-violet-700">
            ⭐ Best viewed on a family computer in 2004 while your parents fight with the broadband router ⭐
          </p>
        </div>

        {showToast && (
          <div
            className="fixed bottom-6 right-6 px-5 py-4 text-base font-bold shadow-[10px_10px_0px_#ffff66]"
            style={{
              borderRadius: "20px",
              background: "#ff66c4",
              color: "#ffffff",
              border: "5px solid #00e5ff"
            }}
          >
            Request failed successfully.
          </div>
        )}
      </div>
    </div>
  );
}

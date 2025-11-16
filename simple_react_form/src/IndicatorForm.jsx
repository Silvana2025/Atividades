import { useState } from "react";
import "./IndicatorForm.css";

export default function IndicatorForm() {
  const [form, setForm] = useState({
    username: "Employee Trust Index",
    id: "ETI_001",
    grade1: "0.5",
    grade2: "0.9",
    situation: "",
    targetGrade: "7.5",
    threshold: "3.8",
    frequency: "Annually",
    ownerArea: "Human Resources",
    themes: ["Leadership"],
    active: true,
  });

  const calculationMethods = ["Mean", "Median", "Sum", "Weighted Mean"];
  const frequencies = ["Monthly", "Quarterly", "Semiannually", "Annually"];
  const areas = ["Human Resources", "Operations", "Finance", "IT", "Marketing"];
  const themes = ["Leadership", "Engagement", "Wellbeing", "Performance"];

  function handleChange(e) {
    const { name, value, type, checked, selectedOptions } = e.target;

    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else if (type === "select-multiple") {
      const vals = Array.from(selectedOptions).map((o) => o.value);
      setForm((f) => ({ ...f, [name]: vals }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting Indicator:", form);
    alert("Saved! (Check the console for the payload)");
  }

  return (
    <div className="indicator-page">
      <form className="indicator-card" onSubmit={handleSubmit}>
        <h2 className="indicator-title">Indicator Form</h2>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="username">Name</label>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="Indicator name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="id">Code</label>
            <input
              id="id"
              name="id"
              type="text"
              value={form.id}
              onChange={handleChange}
              placeholder="e.g., ETI_001"
              required
            />
          </div>
        </div>

        <h2 className="section-title">Calculation &amp; Scoring</h2>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="grade1">grade1</label>
            <input
              id="grade1"
              name="grade1"
              type="number"
              inputMode="decimal"
              step="0.1"
              value={form.grade1}
              onChange={handleChange}
              placeholder="0.5"
            />
          </div>

          <div className="form-field">
             <label htmlFor="grade2">grade2</label>
            <input
              id="grade2"
              name="grade2"
              type="number"
              inputMode="decimal"
              step="0.1"
              value={form.grade2}
              onChange={handleChange}
              placeholder="0.5"
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="situation">situation</label>
          <textarea
            id="situation"
            name="situation"
            rows={3}
            value={form.situation}
            onChange={handleChange}
            placeholder="Optional situation or expression"
          />
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="targetGrade">Target grade</label>
            <input
              id="targetGrade" 
              name="targetGrade"
              type="number"
              inputMode="decimal"
              step="0.1"
              value={form.targetGrade}
              onChange={handleChange}
              placeholder="4.5"
            />
          </div>

          <div className="form-field">
            <label htmlFor="threshold">Threshold</label>
            <input
              id="threshold"
              name="threshold"
              type="number"
              inputMode="decimal"
              step="0.1"
              value={form.threshold}
              onChange={handleChange}
              placeholder="3.8"
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
            >
              {frequencies.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="ownerArea">Owner Area</label>
            <select
              id="ownerArea"
              name="ownerArea"
              value={form.ownerArea}
              onChange={handleChange}
            >
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="themes">Theme(s)</label>
            <select
              id="themes"
              name="themes"
              multiple
              value={form.themes}
              onChange={handleChange}
              aria-describedby="themesHelp"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <small id="themesHelp" className="help-text">
              Hold Ctrl/Cmd to select multiple.
            </small>
          </div>

          <div className="form-field switch-field">
            <label htmlFor="active">Active</label>
            <label className="switch">
              <input
                id="active"
                name="active"
                type="checkbox"
                checked={form.active}
                onChange={handleChange}
              />
              <span className="slider" />
            </label>
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

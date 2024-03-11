// Form.js
import React, { useState, useEffect } from "react";
import "./Form.css";

export default function Form({ handleSubmit, isEditing, formData }) {
  const [name, setName] = useState("");
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    // 수정 중인 경우, formData를 사용하여 폼 데이터 설정
    if (isEditing) {
      setName(formData.name);
      setCharge(formData.charge);
    }
  }, [isEditing, formData]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Form 컴포넌트에서 직접 폼 제출 시, 부모 컴포넌트로 데이터 전달
    handleSubmit({ name, charge });
    // 폼 제출 후 입력값 초기화
    setName("");
    setCharge(0);
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <div>
        <label htmlFor="name">지출항목:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="예) 렌트비"
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="charge">비용:</label>
        <input
          type="number"
          id="charge"
          name="charge"
          className="charge"
          placeholder="0"
          value={charge}
          onChange={(e) => setCharge(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" className="submit" />
      </div>
    </form>
  );
}

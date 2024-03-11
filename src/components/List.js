// List.js
import React from "react";
import "./List.css";

export default function List({ submittedDataList, handleEdit, setSubmittedDataList }) {
  const handleDelete = (index) => {
    // 배열에서 선택한 인덱스의 항목을 제거합니다.
    const updatedList = submittedDataList.filter((_, i) => i !== index);
    // 새로운 배열을 상태로 업데이트합니다.
    setSubmittedDataList(updatedList);
  };

  const totalCharge = submittedDataList.reduce((total, data) => total + parseInt(data.charge), 0);

  return (
    <div>
      <div className="list">
        {/* submittedDataList를 매핑하여 각 항목을 표시 */}
        {submittedDataList.map((data, index) => (
          <div key={index}>
            <div>
              <span>{data.name}</span>
            </div>
            <div>
              <span>{data.charge}</span>
            </div>
            <div>
              <button onClick={() => handleDelete(index)}> X </button>
              <button onClick={() => handleEdit(index)}> edit </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <span>총지출:{totalCharge}원</span>
      </div>
    </div>
  );
}

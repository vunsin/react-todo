// App.js
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", charge: 0 });

  const handleSubmit = (data) => {
    if (isEditing) {
      // 수정 중인 경우
      const updatedList = submittedDataList.map((item, index) => (index === editIndex ? data : item));
      setSubmittedDataList(updatedList);
      setIsEditing(false);
      setEditIndex(null);
      setFormData({ name: "", charge: 0 });
    } else {
      // 새로운 항목 추가
      setSubmittedDataList([...submittedDataList, data]);
    }
  };

  const handleEdit = (index) => {
    // 수정 모드로 전환하고 해당 항목의 정보를 Form에 전달
    setIsEditing(true);
    setEditIndex(index);
    setFormData(submittedDataList[index]);
  };

  return (
    <div className="container">
      <div className="container2">
        <div className="container3">
          <h1>예산 계산기</h1>
        </div>
        <Form handleSubmit={handleSubmit} isEditing={isEditing} formData={formData} />
        <List
          submittedDataList={submittedDataList}
          handleEdit={handleEdit}
          setSubmittedDataList={setSubmittedDataList}
        />
      </div>
    </div>
  );
}

export default App;

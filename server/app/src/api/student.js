// call api

const getStudentList = async () => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:1111/students`,
  });
  return res.data;
};

const getStudentDetail = async (id) => {
  const res = await axios({
    method: "GET",
    url: `https://5fb26e6787ed490016ea8e2b.mockapi.io/students/${id}`,
  });
  return res.data;
};

const createStudent = async (student) => {
  const res = await axios({
    method: "POST",
    url: `http://localhost:1111/students`,
    data: student,
  });
  return res.data;
};

const updateStudent = async (id, student) => {
  const res = await axios({
    method: "PUT",
    url: `http://localhost:1111/students/${id}`,
    data: student,
  });
  return res.data;
};

const deleteStudent = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:1111/students/${id}`,
  });
  return res.data;
  //   $("#modalMessage").modal("show");
  //   await getStudentList();
};

export {
  getStudentList,
  getStudentDetail,
  createStudent,
  updateStudent,
  deleteStudent,
};

const { User, Seller, Complaint } = require("../../models/index");

// 전체회원조회 페이지 이동
exports.getAllUserPage = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// 판매자조회 페이지 이동
exports.getSellerPage = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// 신고글조회 페이지 이동
exports.getComplaintPage = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// 블랙리스트 관리 페이지 이동
exports.getBlacklistPage = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// 거래내역조회 페이지 이동
exports.getOrderLogsPage = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

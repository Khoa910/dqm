import { create } from 'zustand';

const useNavigationState = create((set) => ({
  currentPage: 0,
  rightPaginationSlides: [
    { id: 1, title: "Giới thiệu công ty", path: "/about" },
    { id: 2, title: "Tầm nhìn & Sứ mệnh", path: "/vision" },
    { id: 3, title: "Đội ngũ lãnh đạo", path: "/leadership" },
    { id: 4, title: "Lịch sử phát triển", path: "/history" }
  ],
  setCurrentPage: (page) => set({ currentPage: page }),
}))

export default useNavigationState;
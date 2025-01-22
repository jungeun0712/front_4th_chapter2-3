import { User } from "../model/types";

// 사용자 목록 조회
export const fetchUsersList = async (): Promise<User[]> => {
  const response = await fetch("/api/users?limit=0&select=username,image");
  return response.json();
};

// 특정 사용자 조회
export const fetchUserById = async (userId: number): Promise<User> => {
	const response = await fetch(`/api/users/${userId}`);
	return response.json();
}
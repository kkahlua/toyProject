const API = "https://cat-photos.edu-api.programmers.co.kr";
export const request = async (url) => {
  try {
    const res = await fetch(`${API}${url}`);
    if (!res.ok) throw new Error("API load fail");
    return res.json();
  } catch (e) {
    alert(e.message);
  }
};

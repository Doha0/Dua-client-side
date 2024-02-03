export default async function data() {
  const dua = await fetch("http://localhost:5000/allDua");

  return dua.json();
}

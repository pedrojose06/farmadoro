// pages/index.js
export default function Home({ formattedDate }) {
  return (
    <>
      <h1>Rodrigáo Safado</h1>
    </>
  );
}

export async function getData() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
export default function UserProfile({ params }: any) {
  return (
    <>
      <div className="p-2 flex flex-col items-center justify-center min-h-screen">
        <h1>
          User Profile{" "}
          <span className="p-3 ml-2 rounded-lg bg-orange-500 text-black">
            {params.id}
          </span>
        </h1>
      </div>
    </>
  );
}

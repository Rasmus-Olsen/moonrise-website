export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Moonrise</h1>
      <p className="text-lg text-gray-600 mb-4">
        Your journey begins here. Discover the possibilities with Moonrise.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Feature 1</h2>
          <p className="text-gray-600">Description of your first feature.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Feature 2</h2>
          <p className="text-gray-600">Description of your second feature.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Feature 3</h2>
          <p className="text-gray-600">Description of your third feature.</p>
        </div>
      </div>
    </div>
  )
}

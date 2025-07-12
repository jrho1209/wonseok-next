// src/components/Card.js
export default function Card({ title, imageUrl, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-700 text-sm">{children}</div>
      </div>
    </div>
  );
}
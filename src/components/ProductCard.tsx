import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  isAvailable?: boolean;
}

export function ProductCard({ name, description, price, image, isAvailable = true }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {!isAvailable && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white px-4 py-2 rounded-lg bg-red-600">No Disponible</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-600">{price}</span>
          {isAvailable && (
            <span className="text-xs text-green-500 px-2 py-1 bg-green-50 rounded-full">
              Disponible
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

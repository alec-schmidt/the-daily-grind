type MenuItem = {
    name: string;
    price: string;
    description: string;
};

type Props = {
    category: string;
    items: MenuItem[];
};

export default function MenuSection({ category, items }: Props) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#C2A14D] mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="bg-white shadow-black/50 shadow-md rounded-lg p-4">
                        <div className="flex justify-between">
                        <h3 className="text-xl font-bold text-[#4B2E2B]">{item.name}</h3>
                        <span className="text-lg text-[#C68B59]">{item.price}</span>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
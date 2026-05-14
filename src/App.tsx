export default function App() {
    return (
        <div className="bg-[#202020] min-h-screen text-white p-6 font-sans">
            <div className="flex items-start gap-70">
            <h1 className="text-3xl font-bold mb-2">Top kitoblar</h1>
            <p className="text-gray-400 text-sm mb-6">Barchasi &gt; </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-1.5">
                    <img
                        src="/image1.jpg"
                        alt="Shaxmat kitobi"
                        className="w-28 h-28.25 object-cover rounded-sm"
                    />
                    <div>
                        <h3 className="font-semibold">Shaxmatdagi qobiliyatlaringizga qayta baho bering</h3>
                        <p className="text-gray-400 text-sm">J.Silman</p>
                    </div>
                </div>

                <div className="flex items-start gap-1.5">
                <img
                    src="/image2.jpg"
                    alt="Mening tizimim"
                    className="w-28 h-28.25 object-cover rounded-sm"
                />
                <div>
                    <h3 className="font-semibold">Mening tizimim</h3>
                    <p className="text-gray-400 text-sm">A.Nimzowitsch</p>
                </div>
                </div>


                <div className="flex items-start gap-1.5">
                <img
                    src="/image3.jpg"
                    alt="Shaxmat musobaqasi"
                    className="w-28 h-28.25 object-cover rounded-sm"
                />
                <div>
                    <h3 className="font-semibold">Zurixdagi shaxmat musobaqasi</h3>
                    <p className="text-gray-400 text-sm">D.Bronstein</p>
                </div>
                </div>

                <div className="flex items-start gap-1.5">
                <img
                    src="/image4.jpg"
                    alt="O'yinlar"
                    className="w-28 h-28.25 object-cover rounded-sm"
                />
                <div>
                    <h3 className="font-semibold">BOBBY FISCHER — my 60 memorable games</h3>
                    <p className="text-gray-400 text-sm">Mening esda qolarli o'yinlarim • B.Fischer</p>
                </div>
                </div>
            </div>
        </div>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCloud, faCubes, faMicrochip } from '@fortawesome/free-solid-svg-icons';

export default function ProductBanner() {
    return (
        <div className="h-auto py-12 px-8">
            <h1 className="text-3xl font-bold px-4 py-2 text-center">What offerings shall we present?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div className="flex items-center justify-center p-4">
                    <FontAwesomeIcon icon={faMobileAlt} className="mr-2 w-6 text-gray-500" />
                    <div>
                        <p className="text-lg font-semibold">Cross-Platform Apps</p>
                        <p className="text-xs text-gray-600">Android, iOS, Windows, Mac, Linux</p>
                    </div>
                </div>
                <div className="flex items-center justify-center p-4">
                    <FontAwesomeIcon icon={faCubes} className="w-8 mr-2 text-gray-500" />
                    <div>
                        <p className="text-lg font-semibold">Fixed Tech Stack</p>
                        <p className="text-xs text-gray-600">NextJS, Tailwind, MongoDB, MySQL</p>
                    </div>
                </div>
                <div className="flex items-center justify-center p-4">
                    <FontAwesomeIcon icon={faCloud} className="w-8 mr-2 text-gray-500" />
                    <div>
                        <p className="text-lg font-semibold">Cloud Deployment</p>
                        <p className="text-xs text-gray-600">Amazon EC2, GCN, Bare Metal</p>
                    </div>
                </div>
                <div className="flex items-center justify-center p-4">
                    <FontAwesomeIcon icon={faMicrochip} className="w-9 mr-2 text-gray-500" />
                    <div>
                        <p className="text-lg font-semibold">IoT Prototype</p>
                        <p className="text-xs text-gray-600">Raspberry Pi, Arduino, Jetson Nano</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

interface VideoProps {
    src: string;
    title?: string;
}

function Video({ src, title }: VideoProps) {
    return (
        <div className="h-full">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div>
                <iframe
                    className="w-full h-96 rounded"
                    src={src}
                    title={title}
                    allow="accelerometer;"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default Video;

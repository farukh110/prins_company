const VideoBanner: React.FC = () => {
    return (
        <div className="h-[440px] overflow-hidden">
            {/* Desktop Video */}
            <video
                className="object-cover w-full h-[440px] hidden desk:block"
                poster=""
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                aria-hidden="true"
                aria-label="Silent product video"
                data-uw-rm-av="vi"
            >
                <source
                    src="https://cdn.shopify.com/videos/c/o/v/1d00c8f198b74aa7b05335eea992c4a2.mp4?quality=85"
                    type="video/mp4"
                />
            </video>

            {/* Mobile Video */}
            <video
                className="object-cover w-full h-[440px] tab:hidden"
                poster=""
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                aria-hidden="true"
                aria-label="Silent product video"
                data-uw-rm-av="vi"
            >
                <source
                    src="https://cdn.shopify.com/videos/c/o/v/1d00c8f198b74aa7b05335eea992c4a2.mp4?quality=85"
                    type="video/mp4"
                />
            </video>

            {/* Tablet Video */}
            <video
                className="object-cover w-full h-[440px] hidden tab:block desk:hidden"
                poster=""
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                aria-hidden="true"
                aria-label="Silent product video"
                data-uw-rm-av="vi"
            >
                <source
                    src="https://cdn.shopify.com/videos/c/o/v/1d00c8f198b74aa7b05335eea992c4a2.mp4?quality=85"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default VideoBanner;
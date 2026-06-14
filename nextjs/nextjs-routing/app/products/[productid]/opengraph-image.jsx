import { ImageResponse } from "next/og";
// The ImageResponse class allows you to generate dynamic images using JSX and CSS. This is useful for generating social media images such as Open Graph images, Twitter cards, and more.

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }) {
    const { productid } = await params;
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '-.02em',
                    fontWeight: 700,
                    background: 'white',
                }}
            >
                <div
                    style={{
                        left: 42,
                        top: 42,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            width: 24,
                            height: 24,
                            background: 'black',
                        }}
                    />
                    <span
                        style={{
                            marginLeft: 8,
                            fontSize: 20,
                        }}
                    >
                        Custom OG Image
                    </span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        padding: '20px 50px',
                        margin: '0 42px',
                        fontSize: 40,
                        width: 'auto',
                        maxWidth: 550,
                        textAlign: 'center',
                        backgroundColor: 'black',
                        color: 'white',
                        lineHeight: 1.4,
                    }}
                >
                    {productid}
                </div>
            </div>
        )
    )
}
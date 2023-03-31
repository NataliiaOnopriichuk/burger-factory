export const settings = {
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1365,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
            },
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
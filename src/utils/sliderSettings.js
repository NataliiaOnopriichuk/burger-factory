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
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
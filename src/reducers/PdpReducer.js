import {
  DISPLAY_PRODUCT_DATA
} from '../constants/PdpConstants';

const initalState = {
    productData : {}
};

const productFeatures = {
    specifications: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Donec non eros nec tellus ultricies pharetra eget sed velit."
    ],
    systemRequirements: [
        "Nullam sed ex lacinia massa fringilla elementum.",
        "Donec ac urna non orci eleifend commodo ac bibendum lectus",
        "Integer efficitur dignissim sollicitudin.",
        "Vivamus ut dictum est, congue faucibus sem."
    ],
    productDescription: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus interdum ornare. In eu maximus lacus. Vestibulum luctus posuere vestibulum. Nam in cursus purus, vitae bibendum tortor. Mauris a sem varius, finibus quam interdum, ultricies lorem. Sed id ligula tristique, pharetra purus a, convallis nisi.",
        "Quisque vestibulum ultrices lacus eu vestibulum. Fusce nec pellentesque velit. Fusce ultricies enim non ipsum iaculis malesuada vestibulum finibus mi. Sed vel elit odio. Donec ante sapien, semper ut placerat in, lacinia sit amet neque.",
        "Vivamus semper ullamcorper justo, et interdum enim blandit ut. Etiam placerat in diam vel posuere. Phasellus egestas eget tortor ac pulvinar. Nulla placerat nisi id neque fringilla, non dignissim purus fermentum. Nullam felis nisl, efficitur nec arcu at, varius convallis tortor.",
        "Morbi a urna at erat iaculis blandit at sit amet dolor. Aliquam ut risus et eros auctor pharetra. Duis volutpat quis mauris at fringilla. Nulla aliquam dolor sit amet pellentesque egestas. In dictum augue eget gravida tristique. In vel placerat orci. Cras gravida ac lectus eu pulvinar. Cras commodo orci tellus, non ullamcorper urna commodo ac. Mauris mi libero, molestie ac tellus at, luctus gravida nunc. Nullam quis leo orci. Sed luctus malesuada arcu, non lobortis lectus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus interdum ornare. In eu maximus lacus. Vestibulum luctus posuere vestibulum. Nam in cursus purus, vitae bibendum tortor. Mauris a sem varius, finibus quam interdum, ultricies lorem. Sed id ligula tristique, pharetra purus a, convallis nisi.",
        "Quisque vestibulum ultrices lacus eu vestibulum. Fusce nec pellentesque velit. Fusce ultricies enim non ipsum iaculis malesuada vestibulum finibus mi. Sed vel elit odio. Donec ante sapien, semper ut placerat in, lacinia sit amet neque."
    ]
};

const productData = (previousState=initalState, action) => {
    switch(action.type) {
        case DISPLAY_PRODUCT_DATA:
            return {
                ...previousState,
                productData: {
                    ...action.payload.productData,
                    ...productFeatures
                }
            };
        default: 
            return previousState;
    }
  }
  
  export default productData;

import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../images/office images/img-1.jpeg'
import img2 from '../images/office images/img-2.jpeg'
import img3 from '../images/office images/img-3.jpeg'
import img4 from '../images/office images/ups-1.jpeg'
import img5 from '../images/office images/ups-2.jpeg'
import img6 from '../images/office images/ups-3.jpeg'
import img7 from '../images/office images/ups-4.jpeg'
import img8 from '../images/office images/ups-5.jpeg'
import img9 from '../images/office images/img-4.jpeg'
import img10 from '../images/office images/img-5.jpeg'
import img12 from '../images/office images/logo.jpeg'




export default function MasonryImageList() {
  return (
    <Box className="border-grey-300 border-2 rounded-md shadow-xl bg-fuchsia-100" sx={{ width: 550, height: 420, overflowY: 'scroll' }}>
      <ImageList variant="masonry"  cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Bed',
  },
  {
    img: img2,
    title: 'Books',
  },
  {
    img: img3,
    title: 'Sink',
  },
  {
    img:img4,
    title: 'Kitchen',
  },
  {
    img: img5,
    title: 'Blinds',
  },
  {
    img:img6,
    title: 'Chairs',
  },
  {
    img: img7,
    title: 'Laptop',
  },
  {
    img: img8,
    title: 'Doors',
  },
  {
    img: img9,
    title: 'Coffee',
  },
  {
    img: img10,
    title: 'Storage',
  },
  {
    img: img6,
    title: 'Candle',
  },
  {
    img:img12,
    title: 'Coffee table',
  },
];
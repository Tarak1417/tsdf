import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { red } from '@mui/material/colors';

const newsData = [
  {
    id: 1,
    title: 'महातपस्वी की मंगल सत्रिधि में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह',
    image: 'https://i.ibb.co/YyTzXMX/temple.jpg',
    time: '3 mins ago',
  },
  {
    id: 2,
    title: 'समारोह के दौरान हुई नई योजनाओं की घोषणा',
    image: 'https://i.ibb.co/YyTzXMX/temple.jpg',
    time: '10 mins ago',
  },
  {
    id: 3,
    title: 'साधु-साध्वी के प्रेरणादायक वक्तव्य',
    image: 'https://i.ibb.co/YyTzXMX/temple.jpg',
    time: '20 mins ago',
  },
];

const NewsSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstChild.clientWidth ; // card + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Box px={2} py={3}>
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Lotus_flower.svg/2048px-Lotus_flower.svg.png"
          alt="lotus"
          style={{ width: 28, marginRight: 10 }}
        />
        <Typography variant="h6" fontWeight={600}>
          News
        </Typography>
      </Box>

      {/* Carousel */}
      <Box
        ref={scrollRef}
        display="flex"
        overflow="auto"
        sx={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          gap: 2,
          pb: 1,
        }}
      >
        {newsData.map((item) => (
          <Card
            key={item.id}
            sx={{
              minWidth: isMobile ? '85%' : 300,
              maxWidth: 400,
              height: 340,
              flexShrink: 0,
              position: 'relative',
              borderRadius: 4,
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              scrollSnapAlign: 'start',
            }}
          >
            {/* Dark Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
                borderRadius: 4,
              }}
            />
            {/* Time Label */}
            <Chip
              label={item.time}
              size="small"
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                bgcolor: red[600],
                color: '#fff',
                fontSize: 12,
                zIndex: 2,
              }}
            />
            <CardContent sx={{ position: 'relative', zIndex: 2 }}>
              <Typography variant="body1" fontWeight={600}>
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Pagination Dots */}
      <Box mt={2} display="flex" justifyContent="center">
        {newsData.map((_, index) => (
          <FiberManualRecordIcon
            key={index}
            sx={{
              fontSize: 12,
              mx: 0.5,
              color: index === activeIndex ? red[500] : '#ccc',
              transition: 'color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NewsSection;

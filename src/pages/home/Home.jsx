import SecondBanner from '../../components/secondBaner/SecondBaner'
import ImageSlider from '../../components/slider/ImageSlider'
import Stories from '../../components/stories/Stories';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../state/actions/productAction';


export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
   const getProducts=async()=>{
    await getProduct(dispatch);
   }
   getProducts();
  },[dispatch])
  return (
    <div >
      <ImageSlider/>
      <SecondBanner/>
      <Stories/>
    </div>
  )
}

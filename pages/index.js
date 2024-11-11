import ContactUs from "@/components/IntroduseSection/ContractUs";
import IntroduseSection from "@/components/IntroduseSection/IntroduseSection";
import Slang from "@/components/slang/slang";


export default function Home() {
  return (
   <>
   <Slang/>
   <IntroduseSection info={{style:{direction:'ltr' , background:''} , title:'محصولات ما' , des:' کلیه محصولات موجود در مجموعه وارداتی و آمریکایی میباشد همراه با ضمانت کیفیت' , button:'مشاهده محصولات' , img:'/products.avif', link:'/products'} }/>
   <IntroduseSection info={{style:{direction:'rtl' , background:'#f5f5f5'} , title:'درباره ما ' , des:'شرکت گسترش خط سرد آسیا با بیش از 20 تجربه در ارایه خدمات' , button:' اطلاعات بیشتر' , img:'/aboutUs.jpg', link:'/about-us'}}/>
   <ContactUs />
   </>
  )
}

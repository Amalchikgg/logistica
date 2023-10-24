import Header from "@/components/Header";
import Section from "@/components/Section";
import About from "@/components/About";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className='max-w-[1330px] w-full m-[0px_auto] px-[13px] pt-[54px]'>
      <Header />
      <main>
        <Section />
        <About />
        <section id='services'>
          <Services />
        </section>
        <section className='mt-10px' id='FAQ'>
          <Question />
        </section>
        <Form />
        <Footer />
      </main>
    </div>
  );
}

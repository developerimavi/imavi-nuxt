<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <HeroSlider />

        <AboutOne />


        <section class="blog-area blog-default-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 m-auto">
                        <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                            <h2 class="title">Artikel Terkini</h2>
                            <div class="separator-line mt-14">
                                <img class="me-1" src="/images/shape/line-s2.png" alt="image">
                                <img src="/images/shape/line-s1.png" alt="image">
                            </div>
                            <!-- <div class="desc">
                                <p class="mt-21">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the printer took</p>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="row " data-aos="fade-up" data-aos-duration="1100">
                    <BlogSection v-for="(item, index) of featuredArticles"
                    :key="index"
                    :item="item"/>
                </div>
            </div>
        </section>

        <!-- <FunFactOne /> -->

        <ServiceOne />
<!--
        <FaqOne /> -->

        <TeamSection  />

        <!-- <PortfolioSection /> -->

        <!-- <TestimonialOne /> -->

        <!-- <BrandLogoSection /> -->



        <!-- <ContactDevider /> -->

        <Footer />

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top icofont-rounded-up"></i>
                <i class="arrow-bottom icofont-rounded-up"></i>
            </back-to-top>
        </client-only>

    </div>
</template>

<script>
    export default {
        data: () => ({
            featuredNews: [],
            featuredArticles: [],
        }),
        async fetch () {
            let payload = this.$nuxt.context.payload
            if (!payload) {
            payload = await this.$axios.$post('/.netlify/functions/landing', {})
            }
            this.landingGeneralItems = payload.landingGeneralItems
            this.featuredNews = payload.featuredNews
            this.featuredArticles = payload.featuredArticles
            this.featureddosen = payload.featuredLecturers


        },

        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroSlider: () => import('@/components/HeroSlider'),
            AboutOne: () => import('@/components/AboutOne'),
            FunFactOne: () => import('@/components/FunFactOne'),
            ServiceOne: () => import('@/components/ServiceOne'),
            FaqOne: () => import('@/components/FaqOne'),
            TeamSection: () => import('@/components/TeamSection'),
            PortfolioSection: () => import('@/components/PortfolioSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            BrandLogoSection: () => import('@/components/BrandLogoSection'),
            BlogSection: () => import('@/components/BlogSection'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Home'
            }
        },
    };
</script>



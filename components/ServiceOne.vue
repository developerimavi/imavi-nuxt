<template>
    <section class="service-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-6 m-auto">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="title">Pusat-pusat Studi</h2>
                        <div class="separator-line mt-14">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="Images">
                            <img src="/images/shape/line-s1.png" alt="Images">
                        </div>
                        <div class="desc">
                            <p class="mt-21">Temukan hasrat belajar dan berkarya dalam sentra-sentra IMAVI! Sentra-sentra yang dikelola oleh IMAVI memperkaya khazanah pendalaman ilmu keilahian dengan menyediakan medan yang relevan bagi mahasiswa IMAVI untuk berekspresi langsung dalam bidang-bidang studi yang lebih spesifik.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row icon-box-style1">
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1100" v-for="(service, index) in services" :key="index">
                    <ServiceItem :service="service" />
                </div>
            </div>
        </div>
        <div class="layer-shape">
            <img class="layer-shape-one" src="/images/shape/6.png" alt="shape">
            <img class="layer-shape-two" src="/images/shape/7.png" alt="shape">
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        icon: "/images/icons/s1.png",
                        title: "Centrum Ivan Merz",
                        desc: "Centrum ini secara khusus diperuntukan dalam pengembangan teologi bagi Awam yang menyediakan kursus-kursus seperti Kursus Teologi Katolik, Kursus Pastoral Katekese, dan Kursus Pastoral Kitab Suci"
                    },
                    {
                        icon: "/images/icons/s2.png",
                        title: "Centrum Discipulorum",
                        desc: "Suatu Centrum yang mewadahi kegiatan - kegiatan mahasiswa."
                    },
                    {
                        icon: "/images/icons/s3.png",
                        title: "Centrum Penelitian",
                        desc: "Centrum yang melakukan pengembangan studi teologi."
                    },
                    {
                        icon: "/images/icons/s4.png",
                        title: "Centrum Penjamin Mutu",
                        desc: "Centrum yang melakukan evaluasi dan memastikan kualitas pendidikan."
                    },
                    {
                        icon: "/images/icons/s5.png",
                        title: "Centrum Societis",
                        desc: "Centrum yang membangun kerjasama dan jejaring."
                    },
                    {
                        icon: "/images/icons/s6.png",
                        title: "Centrum On",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                ]
            }
        },
    };
</script>
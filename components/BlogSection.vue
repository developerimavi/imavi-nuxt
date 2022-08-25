<template>

    <div class="col-md-6 col-lg-4">
        <div class="post-item mb-md-50">
            <div class="thumb">
                <n-link to="/blog-details">
                    <div style="background-image: '/images/blog/01.jpg'">
                        <img :src="item.imageLink ? item.imageLink : defaultImage" :alt="item.title">
                    </div>
                </n-link>
               <!-- <div class="meta">
                    <n-link to="/item" class="post-date">{{ item.date }}</n-link>
                    <button class="post-comment"><i class="icofont-speech-comments"></i> {{ item.comment }}</button>
                    <button class="post-like"><i class="icofont-heart"></i>{{ item.like }}</button>
                </div>  -->
            </div>
            <div class="content">
                <div class="category-inner">
                    <img src="/images/shape/line-s1.png" alt="image">
                    <n-link to="/" class="category">{{ item.category }}</n-link>
                </div>
                <h4 class="title">
                    <n-link to="/">{{ item.title }}</n-link>
                </h4>
                <p>{{ item.excerpt }}</p>
                <n-link to="/" class="btn btn-theme btn-border btn-gray">
                    Baca lebih lanjut <i class="icon icofont-long-arrow-right"></i>
                </n-link>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
             item: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data() {
            console.log('print');
            return {
                defaultImage: "/images/logo.svg",
                blogs: [
                    {
                        imgSrc: "/images/blog/01.jpg",
                        title: "We work in the fields of UI/UX design and art direction.",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
                        date: "21 March, 2021",
                        comment: 2566,
                        like: 750,
                        category: "Business/Marketing"
                    },
                    {
                        imgSrc: "/images/blog/02.jpg",
                        title: "printing and type setting industry has been printer.",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
                        date: "17 June, 2021",
                        comment: 3345,
                        like: 980,
                        category: "Development/Design"
                    },
                    {
                        imgSrc: "/images/blog/03.jpg",
                        title: "We work in the fields of UI/UX design and art direction.",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
                        date: "28 May, 2021",
                        comment: 1450,
                        like: 380,
                        category: "Fashion/Style"
                    },
                ]
            }
        },
    };
</script>

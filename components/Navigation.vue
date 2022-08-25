<template>
    <ul class="main-menu nav justify-content-center">
        <li>
            <n-link to="/about">Tentang</n-link>
        </li>
        <li class="has-submenu">
            <n-link to="/service">Program Studi</n-link>
            <ul class="submenu-nav">
                <li>
                    <n-link to="/service">Teologi</n-link>
                </li>
                <!-- <li>
                    <n-link to="/service-details">Service Details</n-link>
                </li> -->
            </ul>
        </li>
        <li>
            <n-link to="https://alma.imavi.org/">Alma</n-link>
        </li>
        <li>
            <n-link to="https://libraria.imavi.org/">Libraria</n-link>
        </li>

        <!-- <li class="has-submenu">
            <n-link to="/project">Project</n-link>
            <ul class="submenu-nav">
                <li>
                    <n-link to="/project">Project</n-link>
                </li>
                <li>
                    <n-link to="/project-details">Project Details</n-link>
                </li>
            </ul>
        </li>
        <li class="has-submenu">
            <n-link to="/blog">Blog</n-link>
            <ul class="submenu-nav">
                <li>
                    <n-link to="/blog">Blog</n-link>
                </li>
                <li>
                    <n-link to="/blog-details">Blog Details</n-link>
                </li>
            </ul>
        </li> -->
        <li>
            <n-link to="/contact">Hubungi Kami</n-link>
        </li>
    </ul>
</template>
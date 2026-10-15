<template>
  <header class="header">
    <div class="container header-inner">

      <!-- Logo -->
      <NuxtLink to="/" class="logo" @click="closeMenu">
        <img src="/assets/pp-logo.png" alt="โรงเรียนพิษณุโลกพิทยาคม">
        <span>โรงเรียนพิษณุโลกพิทยาคม</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="nav">
        <NuxtLink to="/">หน้าแรก</NuxtLink>

        <div class="dropdown">
          <NuxtLink to="#" class="dropdown-toggle">
            เกี่ยวกับ
          </NuxtLink>

          <div class="dropdown-menu">
            <NuxtLink to="/about/school">เกี่ยวกับโรงเรียน</NuxtLink>
            <NuxtLink to="/about/history">ประวัติโรงเรียน</NuxtLink>
            <NuxtLink to="/about/executives">ผู้บริหารโรงเรียน</NuxtLink>
            <NuxtLink to="/about/executive-history">ทำเนียบผู้บริหาร</NuxtLink>
          </div>
        </div>

        <div class="dropdown">
          <NuxtLink to="#" class="dropdown-toggle">
            กลุ่มสาระฯ
          </NuxtLink>

          <div class="dropdown-menu">
            <NuxtLink to="/group/thai">ภาษาไทย</NuxtLink>
            <NuxtLink to="/group/math">คณิตศาสตร์</NuxtLink>
            <NuxtLink to="/group/science">วิทยาศาสตร์และเทคโนโลยี</NuxtLink>
            <NuxtLink to="/group/social">สังคมศึกษา ศาสนา และวัฒนธรรม</NuxtLink>
            <NuxtLink to="/group/foreign">ภาษาต่างประเทศ</NuxtLink>
            <NuxtLink to="/group/art">ศิลปะ</NuxtLink>
            <NuxtLink to="/group/physical">สุขศึกษา และพลศึกษา</NuxtLink>
            <NuxtLink to="/group/occupation">การงานอาชีพ</NuxtLink>
          </div>
        </div>

        <div class="dropdown">
          <NuxtLink to="#" class="dropdown-toggle">
            บุคลากร
          </NuxtLink>

          <div class="dropdown-menu">
            <NuxtLink to="/board/budget">งบประมาณ</NuxtLink>
            <NuxtLink to="/board/personnel">บุคคล</NuxtLink>
            <NuxtLink to="/board/academic">วิชาการ</NuxtLink>
            <NuxtLink to="/board/student">บริหารกิจการนักเรียน</NuxtLink>
            <NuxtLink to="/board/general">บริหารงานทั่วไป</NuxtLink>
            <NuxtLink to="/board/director">สำนักงานอำนวยการ</NuxtLink>
            <NuxtLink to="/board/guidance">กลุ่มงานแนะแนว</NuxtLink>
            <NuxtLink to="/board/library">กลุ่มงานห้องสมุด</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/blog">ข่าวสาร</NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="menu-button"
        type="button"
        aria-label="เปิดเมนู"
        @click="openMenu"
      >
        <i class="bi bi-list"></i>
      </button>

    </div>

    <!-- Mobile Overlay -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="offcanvas-overlay"
        @click="closeMenu"
      ></div>
    </Transition>

    <!-- Mobile Offcanvas -->
    <Transition name="offcanvas">
      <aside v-if="isOpen" class="offcanvas">

        <div class="offcanvas-header">

          <button
            class="close-button"
            type="button"
            aria-label="ปิดเมนู"
            @click="closeMenu"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <nav class="mobile-nav">

          <NuxtLink to="/" @click="closeMenu">
            <i class="bi bi-house"></i>
            หน้าแรก
          </NuxtLink>

          <div class="mobile-section">
            <div class="mobile-section-title">
              <i class="bi bi-building"></i>
              เกี่ยวกับ
            </div>

            <NuxtLink to="/about/school" @click="closeMenu">
              เกี่ยวกับโรงเรียน
            </NuxtLink>

            <NuxtLink to="/about/history" @click="closeMenu">
              ประวัติโรงเรียน
            </NuxtLink>

            <NuxtLink to="/about/executives" @click="closeMenu">
              ผู้บริหารโรงเรียน
            </NuxtLink>

            <NuxtLink to="/about/executive-history" @click="closeMenu">
              ทำเนียบผู้บริหาร
            </NuxtLink>
          </div>

          <div class="mobile-section">
            <div class="mobile-section-title">
              <i class="bi bi-book"></i>
              กลุ่มสาระการเรียนรู้
            </div>

            <NuxtLink to="/group/thai" @click="closeMenu">
              ภาษาไทย
            </NuxtLink>

            <NuxtLink to="/group/math" @click="closeMenu">
              คณิตศาสตร์
            </NuxtLink>

            <NuxtLink to="/group/science" @click="closeMenu">
              วิทยาศาสตร์และเทคโนโลยี
            </NuxtLink>

            <NuxtLink to="/group/social" @click="closeMenu">
              สังคมศึกษา ศาสนา และวัฒนธรรม
            </NuxtLink>

            <NuxtLink to="/group/foreign" @click="closeMenu">
              ภาษาต่างประเทศ
            </NuxtLink>

            <NuxtLink to="/group/art" @click="closeMenu">
              ศิลปะ
            </NuxtLink>

            <NuxtLink to="/group/physical" @click="closeMenu">
              สุขศึกษา และพลศึกษา
            </NuxtLink>

            <NuxtLink to="/group/occupation" @click="closeMenu">
              การงานอาชีพ
            </NuxtLink>
          </div>

          <div class="mobile-section">
            <div class="mobile-section-title">
              <i class="bi bi-people"></i>
              บุคลากรกลุ่มงาน
            </div>

            <NuxtLink to="/board/budget" @click="closeMenu">งบประมาณ</NuxtLink>
            <NuxtLink to="/board/personnel" @click="closeMenu">บุคคล</NuxtLink>
            <NuxtLink to="/board/academic" @click="closeMenu">วิชาการ</NuxtLink>
            <NuxtLink to="/board/student" @click="closeMenu">บริหารกิจการนักเรียน</NuxtLink>
            <NuxtLink to="/board/general" @click="closeMenu">บริหารงานทั่วไป</NuxtLink>
            <NuxtLink to="/board/director" @click="closeMenu">สำนักงานอำนวยการ</NuxtLink>
            <NuxtLink to="/board/guidance" @click="closeMenu">กลุ่มงานแนะแนว</NuxtLink>
            <NuxtLink to="/board/library" @click="closeMenu">กลุ่มงานห้องสมุด</NuxtLink>
          </div>

          <NuxtLink to="/blog" @click="closeMenu">
            <i class="bi bi-newspaper"></i>
            ข่าวสาร
          </NuxtLink>

        </nav>
      </aside>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const openMenu = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}
</script>
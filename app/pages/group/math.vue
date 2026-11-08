<script setup>
useHead({
  title: 'กลุ่มสาระการเรียนรู้คณิตศาสตร์ - โรงเรียนพิษณุโลกพิทยาคม'
})

const profiles = [
  { firstName: 'สุชน', lastName: 'เด็จใจทัด', position: 'ครูชำนาญการพิเศษ', role: 'หัวหน้ากลุ่มสาระฯ' },
  { firstName: 'อภิชาติ', lastName: 'เถื่อนกูล', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'สุรินทร์ชยุตม์', lastName: 'บุญประสพ', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'สุจินต์', lastName: 'หอมเนียม', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ปรารถนา', lastName: 'มีสุข', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'วรา', lastName: 'สามนทา', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'นิจวรรณ', lastName: 'โพธิ์ทอง', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'พรรณธิภา', lastName: 'บุญศิลป์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ชุติมา', lastName: 'นาคสกุล', position: 'ครูชำนาญการ' },
  { firstName: 'พัชราภรณ์', lastName: 'ทองนาค', position: 'ครูชำนาญการ' },
  { firstName: 'คฑาไชย', lastName: 'ทักษ์สิทธา', position: 'ครู' },
  { firstName: 'นันทวรรณ', lastName: 'เอมโอช', position: 'ครูชำนาญการ' },
  { firstName: 'อังษณานันท์', lastName: 'อินทรชัย', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'กนกวรรณ', lastName: 'หงษ์เงิน', position: 'ครู' },
  { firstName: 'ชุดาภรณ์', lastName: 'อ้อมแก้ว', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'นิรวิทธ์', lastName: 'นกพึ่ง', position: 'ครูชำนาญการ' },
  { firstName: 'ชลชรัส', lastName: 'นุกอง', position: 'ครูชำนาญการ' },
  { firstName: 'ชัชพงษ์', lastName: 'โชคพนารัตน์', position: 'ครู' },
  { firstName: 'สุพรรณิการ์', lastName: 'ธนาบูรณศักดิ์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ธีรพล', lastName: 'ท้วมทอง', position: 'ครูชำนาญการ' },
  { firstName: 'สิทธิพล', lastName: 'เขียวชะอุ่ม', position: 'ครูผู้ช่วย' },
  { firstName: 'รัตติกาล', lastName: 'มั่งทัด', position: 'ครูชำนาญการพิเศษ' }
]
</script>

<template>
  <section class="article">
    <div class="container">

      <div class="page-heading">
        <h1>กลุ่มสาระการเรียนรู้คณิตศาสตร์</h1>
      </div>

      <div class="profile-grid">

        <article
          v-for="(profile, index) in profiles"
          :key="index"
          class="profile-card"
        >
          <img
            src="/assets/people/placehold.png"
            :alt="`${profile.firstName} ${profile.lastName}`"
            class="profile-image"
            loading="lazy"
          >

          <div class="profile-content">
            <h2>
              {{ profile.firstName }}<br>
              {{ profile.lastName }}
            </h2>

            <p>
              <template v-if="profile.role">
                {{ profile.role }}<br>
              </template>
              {{ profile.position }}
            </p>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>
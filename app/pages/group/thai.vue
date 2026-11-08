<script setup>
useHead({
  title: 'กลุ่มสาระการเรียนรู้ภาษาไทย - โรงเรียนพิษณุโลกพิทยาคม'
})

const profiles = [
  { firstName: 'อัญธิษฐา', lastName: 'กาญจนไพโรจน์', position: 'ครูชำนาญการพิเศษ', role: 'หัวหน้ากลุ่มสาระฯ' },
  { firstName: 'พนมพร', lastName: 'ชมภูพาน', position: 'ครูชำนาญการ' },
  { firstName: 'วรฉัน', lastName: 'พึ่งม่วงศุภสิน', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'เสาวจี', lastName: 'เสาร์สุข', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'สุพัตรา', lastName: 'พิมพ์กะภีร์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'นิตยา', lastName: 'เอี่ยมทองอินทร์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'อนุสรณ์', lastName: 'มีสุข', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ธีรพล', lastName: 'ม่วงปัทม์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'จิตรลดา', lastName: 'ศักดิ์นิติจารุชัย', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'วิทยา', lastName: 'พุ่มยิ้ม', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ธิดารัตน์', lastName: 'ม่วงยิ้ม', position: 'ครู' },
  { firstName: 'ลฎาภา', lastName: 'เผือกอ่อน', position: 'ครูผู้ช่วย' },
  { firstName: 'อาริยา', lastName: 'ชูช่วย', position: 'ครู' },
  { firstName: 'วิชญ์', lastName: 'วิชญปัญญากุล', position: 'ครูชำนาญการ' },
  { firstName: 'รัฐกรณ์', lastName: 'ภู่ฤทธิ์', position: 'ครูชำนาญการ' },
  { firstName: 'ธัชชัย', lastName: 'กลิ่นทับ', position: 'ครูชำนาญการ' },
  { firstName: 'ปฏิญญา', lastName: 'โกมลกิติสกุล', position: 'ครูชำนาญการ' }
]
</script>

<template>
  <section class="article">
    <div class="container">

      <div class="page-heading">
        <h1>กลุ่มสาระการเรียนรู้ภาษาไทย</h1>
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
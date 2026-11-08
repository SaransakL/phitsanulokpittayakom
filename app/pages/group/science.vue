<script setup>
useHead({
  title: 'กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี - โรงเรียนพิษณุโลกพิทยาคม'
})

const profiles = [
  { firstName: 'อนัญญา', lastName: 'แก้วพินิจ', position: 'ครูชำนาญการพิเศษ', role: 'หัวหน้ากลุ่มสาระฯ' },
  { firstName: 'พิกุล', lastName: 'คำภีระปาวงค์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'อภิวัลย์', lastName: 'มาสชรัตน์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'พัชรินทร์', lastName: 'สมฤทัย', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ธัญชนก', lastName: 'มีพยุง', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'กาญจนา', lastName: 'ธรรมอัน', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ขวัญ', lastName: 'ตาใจ', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ธัญญรัตน์', lastName: 'บุญธัญกรณ์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'กัมปนาท', lastName: 'สุขนิตย์', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'อรสา', lastName: 'พุ่มไม้', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ธีรารัตน์', lastName: 'ทองงามดี', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'วาสนา', lastName: 'กันแตง', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'นันทิยา', lastName: 'เรือนแพร', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'วีรพล', lastName: 'อินพลอย', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'เบญญาภา', lastName: 'แสนเมือง', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'กิ่งแก้ว', lastName: 'บรรลุผลสกุล', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'วิฑูรย์', lastName: 'เต๋มา', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ฐิติพร', lastName: 'แม่งมา', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'สุวนันท์', lastName: 'อาจเวที', position: 'ครู' },
  { firstName: 'พนิดา', lastName: 'โสภา', position: 'ครูชำนาญการ' },
  { firstName: 'ภวัต', lastName: 'กมลศิลป์', position: 'ครู' },
  { firstName: 'จันทนา', lastName: 'ถิ่นจอม', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'มณทิรา', lastName: 'กันมา', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'อมินตรา', lastName: 'เกิดบัว', position: 'ครูชำนาญการ' },
  { firstName: 'กิตติพงษ์', lastName: 'เพชรทอง', position: 'ครูชำนาญการ' },
  { firstName: 'อรอนงค์', lastName: 'มั่นคง', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'พิริยะ', lastName: 'ตระกูลสว่าง', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'บุษบา', lastName: 'เพ็งผ่อง', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'พรวดี', lastName: 'ใจเที่ยงธรรม', position: 'ครู' },
  { firstName: 'สุพาณี', lastName: 'แสงสิน', position: 'ครู' },
  { firstName: 'ดวงเดือน', lastName: 'ทองจีน', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ปาริฉัตร', lastName: 'สัตรัตน์วัฒนา', position: 'ครู' },
  { firstName: 'วิไลวรรณ', lastName: 'อุทธตรี', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'รุ่งนภา', lastName: 'น่วมน้อย', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ปิยทัศน์', lastName: 'คำน้อม', position: 'ครูผู้ช่วย' },
  { firstName: 'ทานตะวัน', lastName: 'ประวัง', position: 'ครู' },
  { firstName: 'จรูญ', lastName: 'เถื่อนกูล', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ยุทธนา', lastName: 'อยู่ป้อม', position: 'ครูชำนาญการ' },
  { firstName: 'นพวรรณ', lastName: 'คงเพ็ง', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'นริสลา', lastName: 'ทองคำ', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'มลชยา', lastName: 'หวานชะเอม', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'อโณทัย', lastName: 'เพิ่มลี้วิริยะกุล', position: 'ครูชำนาญการพิเศษ' },
  { firstName: 'ธัญญรัตน์', lastName: 'เต๋มา', position: 'ครูจ้างสอน' },
  { firstName: 'ก่อเขต', lastName: 'อินทโชติ', position: 'ครูจ้างสอน' },
  { firstName: 'พัชรียา', lastName: 'เขน่วม', position: 'เจ้าหน้าที่ปฏิบัติการวิทยาศาสตร์ (Lab Boy)' },
  { firstName: 'จิรวัฒน์', lastName: 'พืชผล', position: 'ครูจ้างสอน' },
  { firstName: 'ธีรารัตน์', lastName: 'สุ่มนาค', position: 'ครูจ้างสอน' },
  { firstName: 'นันท์นภัส', lastName: 'แสงเพชร', position: 'เจ้าหน้าที่ปฏิบัติการวิทยาศาสตร์' }
]
</script>

<template>
  <section class="article">
    <div class="container">

      <div class="page-heading">
        <h1>กลุ่มสาระการเรียนรู้<br>วิทยาศาสตร์และเทคโนโลยี</h1>
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
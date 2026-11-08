<template>
  <footer class="footer">
    <div class="container">

      <div class="footer-main">
        <div class="footer-brand">
          <h3>โรงเรียนพิษณุโลกพิทยาคม</h3>
          <p>
            สำนักงานเขตพื้นที่การศึกษามัธยมศึกษา พิษณุโลก อุตรดิตถ์
          </p>
          <p>
            เลขที่ 1 หมู่ที่ 8 ตำบลท่าทอง อำเภอเมือง จังหวัดพิษณุโลก 65000
          </p>
        </div>

        <div class="footer-links">
          <h4>ติดตาม</h4>

          <NuxtLink to="https://www.facebook.com/pp.ac.th" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-facebook"></i>Facebook
          </NuxtLink>
          <NuxtLink to="https://www.tiktok.com/@pp_school.official" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-tiktok"></i>TikTok
          </NuxtLink>
        </div>

      </div>

      <div class="footer-bottom">
        <p>
          © {{ new Date().getFullYear() }}
          โรงเรียนพิษณุโลกพิทยาคม - All Rights Reserved.
        </p>

        <div>
          <NuxtLink to="/privacy">
            นโยบายความเป็นส่วนตัว (Privacy Policy)
          </NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>
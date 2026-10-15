
<script setup>
import { executiveHistory } from '~/data/executive-history'

useHead({
  title: 'ทำเนียบผู้บริหาร - โรงเรียนพิษณุโลกพิทยาคม'
})
</script>

<template>
  <section class="executive-history">
    <div class="container">
      <div class="page-heading">
        <h1>ทำเนียบผู้บริหาร</h1>
      </div>

      <div class="history-table-wrap">
        <table class="history-table">
          <thead>
            <tr>
              <th class="number-col">ลำดับ</th>
              <th>รายนามผู้บริหาร</th>
              <th class="year-col">ปี พ.ศ.</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(person, index) in executiveHistory"
              :key="person.name + person.years"
            >
              <td class="number-col">
                <span class="number-badge">
                  {{ index + 1 }}.
                </span>
              </td>
              <td class="person-name">
                {{ person.name }}
              </td>
              <td class="year-col">
                <span
                  class="year-badge"
                  :class="{ current: person.years.includes('ปัจจุบัน') }"
                >
                  {{ person.years }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
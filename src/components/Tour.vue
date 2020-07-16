<template id="tour">
  <v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>
</template>

<script>
export default {
  name: "Tour",
  props: {
    halloween: Boolean
  },
  data() {
    return {
      myOptions: {
        useKeyboardNavigation: false,
        labels: {
          buttonSkip: "ข้าม",
          buttonPrevious: "ย้อนกลับ",
          buttonNext: "ถัดไป",
          buttonStop: "เสร็จสิ้น"
        }
      },
      steps: [
        {
          target: "#main-game>h4", // We're using document.querySelector() under the hood
          content: `คุณเล่นเป็น <strong>หน้ายิ้ม</strong>! คุณจะเป็นฝ่ายชนะ ถ้า
          <ul style="text-align: left;">
          <li>ตัวหมากตัวใดตัวหนึ่งของคุณไปถึงอีกด้านของกระดาน</li>
          <li>คู่ต่อสู้ไม่สามารถเคลื่อนไหวได้อีกต่อไป</li>
          <li>หรือคุณกินตัวหมากของศัตรูจนหมด</li>
          </ul>`,
          params: {
            placement: "right"
          }
        },
        {
          target: "img:first-of-type",
          content: "วิธีการเดินคือ <strong>ให้ลากแล้วปล่อย</strong>"
        },
        {
          target: "#main-rules>div>h4",
          content:
            "คอมพิวเตอร์จะค้นหารูปแบบการเดินที่หน้าตาเหมือนหน้ากระดานปัจจุบันแล้วสุ่มสีเพื่อเดิน",
          params: {
            placement: "left"
          }
        },
        {
          target: ".limit-options-btn",
          content: `ด้วยปุ่มนี้คุณสามารถเปลี่ยนวิธีการดูรูปแบบการเดินได้ <ul style="text-align: left;">
          <li>ดูรูปแบบการเดินที่เป็นไปได้เท่านั้น</li>
          <li>ดูรูปแบบการเดินทั้งหมด</li>
            </ul>`,
          params: {
            placement: "bottom"
          }
        }
      ],
    };
  },
  mounted: function() {
    this.$tours["myTour"].start();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

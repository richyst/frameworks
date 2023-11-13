<script lang="ts">
  let value = 'Prefilled'
</script>

<input type="text" value="{value}" >

<style lang="scss">
  @import "../../shared/styles/variables.scss";

  input {
    background-color:  $wrong-red;
  }
</style>
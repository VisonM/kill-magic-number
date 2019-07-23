# 开发指南

> An awesome project.

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div>Hello, {{ name }}!</div>
  </template>

  <script>
    // import Dict from '/data-dictionary'
    module.exports = {
      data: function () {
        return { name: 'Vue' }
      }
    }
  </script>
</script>

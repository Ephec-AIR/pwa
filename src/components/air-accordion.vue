<template>
    <div class="air-accordion" role="tablist" enhanced>
      <slot></slot>
    </div>
</template>

<script>
  export default {
    props : ['title'],
    data () {
      return {
        panels: [],
        headerHeight: 0,
        availableHeight: 0
      }
    },
    methods: {
      onPanelChange (evt) {
        this.panels.forEach(panel => {
          panel.$el.removeAttribute('aria-expanded');
          panel.$el.setAttribute('aria-hidden', 'true');
        });
        evt.target.setAttribute('aria-expanded', 'true');
        evt.target.removeAttribute('aria-hidden');
        requestAnimationFrame(_ => this.movePanels());
      },
      calculateGeometries () {
        if (this.panels.length === 0) {
          return;
        }
        this.headerHeight = this.panels[0].headerHeight;
        this.availableHeight = this.$el.offsetHeight - (this.panels.length * this.headerHeight);
      },
      movePanels() {
        let baseY = 0;
        this.panels.forEach((panel, index) => {
          panel.$el.style.transform = `translateY(${baseY + (this.headerHeight * index)}px)`;
          // NOTE this one causes 50% perf lost => 60fps to 30fps
          //panel.content.style.height = `${this.availableHeight}px`;
          if (panel.$el.getAttribute('aria-expanded')) {
            baseY += this.availableHeight;
          }
        });
      }
    },
    mounted () {
      this.panels = this.$children;
      this.$el.addEventListener('panel-change', this.onPanelChange);
      requestAnimationFrame(_ => this.$el.setAttribute('active', ''));
      this.calculateGeometries();
      this.movePanels();
    }
  }
</script>

<style lang="scss">
  .air-accordion {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 15px;
    background: #FFF;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &[enhanced] {
      position: relative;
      visibility: hidden;
      width: 75%;
      height: 270px;
      overflow: hidden;
    }
    &[enhanced] .air-accordion-panel {
      position: absolute;
      top: 0;
      width: 100%;
    }
    &[active] {
      visibility: visible;
    }
    &[active] .air-accordion-panel {
      transition: transform 0.3s ease-in, opacity 0.3s ease-in;
    }
  }
</style>
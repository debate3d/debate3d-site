<script>
  export default {
    name: 'box-topic',
    props: ['topic', 'position'],
    computed: {
      namePositive () {
        return this.topic.position.positive
      },
      nameNegative () {
        return this.topic.position.negative
      },
      countPositive () {
        return this.topic.votes_topic.positive.length
      },
      countNegative () {
        return this.topic.votes_topic.negative.length
      },
      countCards () {
        return this.topic.cards.count
      },
      tags () {
        return this.topic.tags
      }
    }
  }
</script>

<template lang="html">
  <div
    class="box box-theme"
    @click="$router.push(`/topic/${topic.uid}/detail`)">

    <span class="subtitle is-4">
      {{ topic.title }}
    </span>

    <div class="box__description">
      <p class="box__description--author">
        <ul>
          <li>
            <p> {{ countCards }} card(s) cadastrados </p>
          </li>
          <li>
            <p> {{ namePositive }}: {{ countPositive }} </p>
          </li>
          <li>
            <p> {{ nameNegative }}: {{ countNegative }} </p>
          </li>
        </ul>
      </p>

      <b-taglist>
        <span
          v-for="tag in tags"
          class="tag is-info"
          @click="$router.push(`/tag/${tag.label}`)"> {{ tag.label }} </span>
      </b-taglist>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/_extend";

  .box-theme {
    color: #363636;
    position: relative;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);

      .subtitle {
        transform: translateY(-40px);
      }

      .box__description {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    .subtitle {
      height: 100%;
      display: block;
      margin-bottom: 0;
      text-align: center;
      transition: all .3s ease;
      width: 100%;
    }

    .box__description {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      opacity: 0;
      transform: translateY(30px);
      transition: all .3s ease;
      background-color: $menu-color;
      color: white;
      padding: 0.5em;

      .button {
        position: absolute;
        bottom: 0.5em;
        right: 0.5em;
      }
    }

    .tags {
      position: absolute;
      right: 10px;
      bottom: 10px;
      z-index: 4;
    }

    > .tag {
      cursor: pointer;
      transition: background-color .4s ease;
    }

    > .tag:not(.is-position) {
      margin-right: 5px;
    }

    > .tag.is-position {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
    }

    @media screen and (max-width: 992px) {
      .box-theme {
        padding: 1.25rem 0 0 0;

        .subtitle {
          transform: translateY(-40px)
        }

        &:hover .subtitle {
          transform: translateY(-40px);
        }

        .box__description {
          opacity: 1;
          transform: none;
        }
      }
    }
  }
</style>

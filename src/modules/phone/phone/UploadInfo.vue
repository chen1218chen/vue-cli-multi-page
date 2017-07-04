
<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="您的姓名" name="uname" v-model="uname" placeholder="请输入您的姓名" value-text-align="center"></x-input>
      <x-input title="您的电话" name="telephone" v-model="telephone" placeholder="请输入您的电话"></x-input>
      <x-input title="问题发生地" name="place" v-model="place" placeholder="请输入问题发生地"></x-input>
      <x-textarea placeholder="请详细描述问题情况（150字以内）" :row="3" :autosize=true></x-textarea>
      <x-input placeholder="I'm placeholder">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-input>
      <x-input title="上<i class='vux-blank-half' style='color:red'>11</i>报<i class='vux-blank-half'></i>人" v-model="uname"></x-input>
      <x-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>
      <datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="center"></datetime>
      <selector title="隐患类别" placeholder="Placeholder" :options="['工艺技术', '其他']" v-model="value7"></selector>
      <x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>
      <popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>
      <popup-picker title="请选择" placeholder="Required" :data="list" v-model="value6" value-text-align="left"></popup-picker>
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
      <x-textarea placeholder="请填写详细信息" :show-counter="false" :rows="3">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-textarea>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea } from 'vux'
  export default {
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea
    },
    data () {
      return {
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        uname: '张三',
        telephone: '13669182867',
        place: '西安',
        value7: '',
        value8: '',
        value4: '',
        time1: '2017-06-01',
        value5: ['A'],
        value6: [],
        list: [['A', 'B', 'C']],
        numberValue: 0
      }
    }
  }
</script>
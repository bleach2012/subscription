import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13185745',
            'https://i.gkd.li/import/13191546',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '下方横幅',
      activityIds: 'com.magicalstory.AppStore.search.searchActivity',
      rules: [
        {
          matches: [
            '[id="com.magicalstory.AppStore:id/banner"]',
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13185746',
        },
      ],
    },
  ],
});

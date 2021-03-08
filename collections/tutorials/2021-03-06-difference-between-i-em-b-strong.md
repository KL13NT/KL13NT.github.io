---
title: الفرق بين بعض الـ HTML tags
date: 2020-10-31
description: شوية تاجز مدوخانا, تعالوا نلعب بيهم شوية 😂
lang: ar
category: هندسة البرمجيات
---

_البوست ده كان اجابة على سؤال على احدى جروبات فيسبوك_

في فرق كبير بينهم, والفرق مهم انك تعرفيه كـ frontend developer. عشان
يتفهم الفرق مابينهم لازم نفهم الفرق مابين التوضيح (التشديد) والإخطار\الاستعجال.

## التشديد
التشديد (emphasis) هو تأكيد معلومة. زي مثلاً لما اقول "*الكلاب* تحب السباحة",
هنا انا شددت ان الكلاب هي اللي بتحب السباحة.

## الإخطار
اما الإخطار والاستعجال (seriousness, urgency) زي مثلاً اني اقول "**متبقى ساعة على الحجز سجل الآن**". او "**لو لم يتم تسليم الاوراق المطلوبة قبل الميعاد سيكون العقاب شديد**". هنا انا بخطرك وبستعجلك بأهمية الاسراع في التسجيل.
الكلام ده ضروري نفهم الفرق فيه, لإنه بيفصل بين الـ tags المذكورة.

## اولاً تاج الـ em (التشديد emphasis):
توّضح التشديد على المعلومات. غالباً بتستعمل في الاشارة لمصدر المعلومة او كلمات معينة. زي اما اقول "الكلاب هي الحيوانات <em>الوحيدة</em> التي تحب المياه". هنا انا أكدت ان الكلاب *فقط* هي الحيوانات الوحيدة اللي بتحب المياه.
بينما تاج `i` وظيفتها الوحيدة هي الإشارة الى كلمات بلغات اخرى او الاصطلاحات
(idioms), او المصطلحات الفنيّة. ويمكن تغيير شكلها باستعمال CSS, لذلك مش مضمون
انها تبقى italic اصلاً.

## ثانياً تاج strong (الإخطار والاستعجال urgency and seriousness):
توضّح الأهمية والاستعجال والإخطار. يمكن استعماله لإخطار المستخدم بمعلومة يجب قرائتها قبل غيرها, زي التحذيرات "<strong>التسجيل يغلق خلال ساعات. سارعوا بالحجز!</strong>".
بينما تاج `b` وظيفتها الوحيدة هي اضافة شكلية ليس إلا. ويمكن تغيير شكلها باستعمال
_CSS_, لذلك مش مضمون انها تبقى bold اصلاً.

## طب الكلام ده بيفرق فإيه؟
طب الكلام ده بيفرق فإيه؟ بيفرق في قارئات الشاشة screen readers. دي برامج بتقرأ محتوى الشاشة لذوي الاحتياجات الخاصة اللي مش قادرين يقرأوا الصفحة لضعف النظر او غيره. قارئات الشاشة تستعمل العلامات `strong` و `em` عشان تغير اللهجة او طريقة الكلام او الانطباع. زي مثلاً ما يبطأ او يأكد على الكلمة. بينما `i` و `b` ملهمش لزمة بالنسبة لقارئات الشاشة.
ومن المفضل استعمال `strong` و `em` او بدائل اخرى بدل `i` و `b`. يعني `i` و b دول ملاذ
اخير.

> اتمنى الاجابة تبقى مفيدة للناس اللي بيقولوا مفيش فرق او ملهمش لزمة.

المصدر:
- [WHATWG HTML Spec](https://html.spec.whatwg.org/)
---
path: "/blog/GitHub-basics/"
date: "2019-07-17"
title: "اساسيات GitHub"
description: "جيتهاب من احسن و اشهر المواقع للتحكم في نسخة الكود, تعالوا نعرف ليه."
image: Git&GitHub.jpg
author: "نبيل ثروت"
length: 850
lang: "ar"
ogImageName: "Git&GitHub"
ogImageExtension: "jpg"
tags: ["Git", "DevOps", "Arabic"]
---
عمرك الكود بتاعك عدلت عليه و التعديل ده حصل فيه مشكلة و اضطريت انك تعيد البروجكت او تمسح و تعيد كتابة جزء كبير اوي؟ GitHub هيساعدك جداً في حاجه زي دي, تعالوا سوا نعرف فوايدة و استخداماته و ازاي نستخدمه.

# ايه هو Git و ايه فوايدة؟
قبل ما ابين ايه فوايدة حابب اوضح ان في فرق بين Git و GitHub. Git هو نظام موزع للتحكم في نسخة البرامج و هو مجاني و open source بيسمح للمطورين انهم يشتغلوا على نفس الكود في نفس الوقت بسرعة و خفة. من خصائصه: 
1. Repositories
2. Branching
3. Distributed
4. Committing
5. Staging Area

ببساطة, تقدر تعامل النظام ده على انه فولدر كبييير جواه المشاريع اللي انت عاملها كلها, كل مشروع اكيد ليه فولدر باسم محدد و الفولدر ده هنتعامل معاه على انه مستودع لكود المشروع *Repository* بيتم فيه حفظ الشغل كله بكل المعلومات اللي تهمك. 

كل مستودع بيتقسم الى افرع *Branches* و اللي فيها ممكن يكون عندك مثلاً فرعين و الكود بتاعهم مختلف جداً عن بعض. 
من ضمن امثلتها ان في معظم المشاريع بيكون المستودع متقسم لفرعين, فرع التطوير *Development* و فرع الانتاج او الرئيسي اللي بيطلع للمستخدمين *Master*. طب دلوقتي انت شغال على الكود, و عايز ترفعه على النظام, هتعمل ايه؟ دي بقى مرحلة الـ Committing و بتنقسم بدورها الى 3 مراحل. ب
1. Untracked
2. Staging
3. Committing

في المرحلة الاولى بيكون الفايل لسه مش على النظام, و بيكون ساعتها Git ميعرفش حاجه عن الفايل ده ولا يعرف انه موجود اصلاً. بنبدأ اننا نعمل Add للفايل ده بحيث نقول لـ Git اننا عايزينه ياخد باله ان الفايل ده موجود و عايزينه يراقب اي تغيرات بتحصل فيه. كده احنا Tracking في مرحلة الـ Staging. اي تغير هيحصل هيكون Git على علم بيه من غير ما نحتاج نعمل Add للفايل تاني. 

بعد كده بقى عايزين نرفع الفايلات اللي Git عارفهم دول هنودع الفايلات جوا المتسودع و دي عملية ال Commit. اول ما نعمل كده بيكون خلاص الفايل اتعمله ايداع في المستودع و نقدر لو غيرنا و عملنا فوق ال Commit الف Commit اننا نرجع بسهولة لأول Commit. ده لأن النظام بيبقى محتفظ بكل نسخة من كل فايل معمولة Tracking بحيث ان لو حصل خطأ نقدر نرجع الكود للوقت اللي كان فيه شغال تمام. وحتى بعد ما نرجع القديم و نستبدلة مكان الجديد, الجديد بيفضل موجود في النظام برضه لو حبينا نرجعه هو تاني.

طيب كفاية شرح من برا بقى, ازاي نستخدم GitHub؟ 

# اساسيات GitHub
GitHub مبني على نظام Git و هو من اشهر المواقع اللي مطبقة النظام ده و لكنه مش الوحيد. انا هفترض انكم مسطبين Git على اجهزتكم بالفعل. مبدأياً لازم متخافوش من ال Command line او الـ shell ايا كان نظام التشغيل اللي بتستخدموه.

هندخل على موقع GitHub و نعمل Repository جديدة.

![ازاي تعمل ريبو جديدة](https://lh3.googleusercontent.com/Qdr_Mw2zkabnJebhpXArpQpFzD2aFI0tCPp3xer8UdJZDqtOdHCygw7HVtSu-aaJ87ehLmo5N9jiRWBZ2upqIPyEbmP00vSe4FtjgZMJv4H4cE2havE8tDMR-FEKeb7MuRx29xYuMo3mE4XkY1-6WO7-BDiOe9DgVmwYh2AP1YMdoo55B3I9I3ARXBTcrrsrz6qOKF4MtJIt0NdUKuzHnZOeNDTGJECa88I4Eb4HmKBY8JCo4pCtNVhWlVx48VHX6BfcTfvK3_Ss2Lp7RDKQGr87MYMR-h2gyj2DH4vuwqgzsTlY5XKGCh36mpi3Y4yuBIqkdYXwT5eRkwVs4CmK2SUQExU4anylgUp4N4bit7jFVWoTrOWx6VrYK5DuQCWOGfr_qF09PiAQRig3IDfK2177k4fpB8Xuk14a1aFrA_1NBHVBBoCpXhlCuXYEJiucpz7cYq90Aj2QfDmpfDTLfCIilP8Wy_JJihBppEkupnzuyoJ8hMRpBs8_fzWWh5fyhLf2Bv-QBDc96sTN43Ik7ReXGoVjU80OKJtBYnulbhqGY2I_D5rJc8782m0p20fNiDofET6PLMGp9rf1zHdUg-V8mjuOcgL_34IzcVc=w1366-h705)

وهتبدأ تملا البيانات بتاعتها, من اول الاسم و هي عبارة عن ايه لحد نوعها من حيث اي حد يقدر يشوفها و لا خاصة بيك انت بس. 

![](https://lh3.googleusercontent.com/c253FXnZKeBlfcxBiFBmqRBvYQkVnxXHF8KKQxhrs8tmYTJvuI3ETpjCLsOP2sfLJszJ1RqPKjpodYvblRyWPJ8TdigmYQQ4guRF2UW_PZGj3zub4tRXpqQp2IaJVVP-3dJNOc5R8eWEefo5v4-4LhKgE9DL3VLBx7sZoVUZte2oixqi3vYWxMx1quGeF7hoXDPzzeWcahO-5GQV4exd1LWbHnXH0SJ6lhU7FMapTITnUz8pH7g5gY16fPmYxNkAO98u82otGtOffOaxE5tH5z4huQzm55gNYj4PAnpFO0XbwZQptVKhFHAti2reiYOSZR3GfXQep9tfNO46RPpGsEND2SJjegb2PSu-GtCdOc8as5KGAsbzw2R2uB7nCyFD9D-42-sAc9PKGPxFqyhVrbWIahUlHfG3IxkFg7hU980h1VCdC3xUfpNKcKwdFfd42zXAvTWkS5Z7xgQM2rYa4GRD6PQEzh6ndGDGdOPIiUftaSV5TTerBXY8nPhtbiO8irgHY8hUYyvp4J0VoeYIzr_ZAzl6FkyNAD3Tf69nbPeU8sARarO8I8p55AjaSvaijXQBvmRf96RlFqoSmgaZyvLo1tI7aeW3w6KTIwY=w1366-h705)

اختيار *Initialize this repository with a README* ده هنحتاجه عشان نكتب فيه المقدمة للمشروع باستخدام لغة اسمها Markdown و دي مش هتكلم عنها في البوست ده.

بعد كده ناخد لينك الريبو اللي عملناها دي و نوصل المشروع بيه عن طريق ال command line. 

![](https://lh3.googleusercontent.com/tbnWonHIlALn_PfPGslcl3RjVhl-dpPkxKUsfCEWKKFOjO5JveBC2Lp2N6qeg3UpuP2O0-ZA1w4V0ZyAOVppJPMFeKBg3JX3Wgq_vNjCz_1uzexMPH52boAQcwvd9_GTGKqcTUvWeeNKv96y8fSY_1S5cucJe1R7tNRShh1ynYL5Xgc6duFOEgekLiisS-VVY7HmzM3t9gVGnZIj87kVAbuBpDt8WLTYxjIQy-ug9f_OgCJ0Ns765d39qryJ5fUtUnnruiBAtRWbnl9kSxEYRWoR9hjNLVDskyJSnAhh5OSs4o5G9nK_oEuRKom4fF76n_7wNXzi0BuFr6rDnSNQBj5Werbg7BcYy7G3pk5q08D181NrQsy_atXPPAb7hduSgimlS0GiW7cwIC6wQKQrGiN12Jm0zn6WCh3r5xit_V45AMA2XFza1IJfTH32bpL34pi6wXASBfqkDRK4jTAOIevBoqv2tigIaDNCjU0eFVHxAQfDSYrUSK_155xoSZ02T6mmr7VqywEJ7e6LwprAJ-43BuP7IrUNLG4IKr62v4FCMe026bfs6Y1jRoT3x8l4kDCVgNj5smjMCYM79DTgFZM7ai6pYQkRmV2X0lA=w1366-h323)

هتدوس على الزرار الاخضر *Clone or download* و هتدوس في القايمة اللي هتظهر على زرار الكوبي الصغير جنب اللينك. بعد كده نفتح ال command line و نكتب `git clone link` مع تغيير `link` بالرابط اللي خدناه كوبي. اتاكد انك بتشغل الكوماند دي جوا فولدر فاضي و بعد كده تحط فيه فايلات المشروع. احنا كده في مرحلة ال Untracked. 

تعمل بقى بعد كده `git add .` عشان تخلي جيت ياخد باله من الفايلات اللي اتضافت. بعد كده تعمل `git commit -m "message"` مع استبدال `message` بنووت صغيرة بتتبعت مع ال commit بحيث تعرف ايه التغير اللي حصل. اول مره خليها "First commit". 

كده جيت واخد باله من الملفات بس على جهازنا احنا بس, محتاجين بقى نرفع الفايلات دي على جيتهاب عشان اي حد يفتح الريبو بعد كده يلاقي الفايلات و التعديلات و هكذا. عشان نعمل كده هنحتاج `git push origin master`. دي وظيفتها انها ترفع الفايلات الى الفرع الرئيسي *master*. 


# ازاي تعمل افرع جديدة
الطريقة سهلة و بسيطة. كل اللي عليك انك هتكتب `git checkout branchname -b` مع تغيير `branchname` بالاسم اللي تحبه للفرع. وظيفة كوماند `checkout` انها تغير مابين الافرع. بالاداء الاساسي هو هيغير الفرع لوحدة اول ما تكتب الكوماند بس من غير `-b` لان الفلاج ده وظيفته انه يقول لجيت "اعمل فرع جديد بالاسم ده". اما لو كتبنا `git checkout branchname` هيقوم محول لفرع تاني و هكذا. 

# ازاي تحمل اي تحديثات حصلت للكود
لو انت شغال مع حد تاني في نفس الريبو من الاكيد انهم هيرفعوا كود هما كتبوه, و انت اكيد هتعوز تحمل الكود ده و تشتغل عليه. الكوماند لحاجه زي دي هي `git pull` و هو هيحمل الفايلات و يتأكد انك *up-to-date*.

كده احنا عملنا ريبو, رفعنا شغلنا, و عملنا اكتر من فرع. و دلوقتي هسيبكوا مع صورة لكل الكوماندس اللي استخدمناهم

![](https://lh3.googleusercontent.com/D31WtWGDdp-RY4bE-pUp_0FsLQkj6sA1OX2cYdB3rZpLkFMxNSa3q2auFnv-st-jtAOtfurZXPxR-FcbRKSLM7avFdLjJbftH9GDA-6QXQeG_DIuqGdmvD0pLUecy3LBZvARR4rU1m2Yc1_RmbcVYfvWT0ly6LA2YixlQ8K3ivWGgWCgKkBc5v792WfQzpm53VndnPILk27-Ovw9GUdeKdWHIhqp6xEJBCWzRgqnsAa3qtb2YHE2_5ZZ_Sxp6ZH4vzTPd3TKu5KAI8OSVCa074A9t2i273DVoAm5pxlkx1EtBYwPXJozhMGmVlSKV2wxBg6KqFFBGeULJxxz1veT6bhhvA9unT3Ccj_7k4dVngOIlrQnSj8WPubaeRAuh5RQ6N_YueUAegQCrgcwFu4fqE9lFFDXG-_FUQjRn1ssvZvVbKjxWIAvZKOxT-esH_tjlFEpSdDQCiM1rbcgv_xGMgI2IBVmsLIivNs3d3bEDEQBEhkNW9gxPi3tX0ZYcS75t-nYMbPrDM-80NucQFa1b081eYh8FBs-LaXJQnLdYzZ8wJqLcBX3GJw6itteH87pSnoQnijMoQ51giS3t8imdEy0GItI2xuwGeYQ0hw=w1366-h705)

لو عجبكم البوست ده ابعتوه لاصحابكم و لو عندكم اسئلة ابعتوهالي على تويتر [@Nabil_Tharwat16](https://twitter.com/Nabil_Tharwat16) او على Valarium. 
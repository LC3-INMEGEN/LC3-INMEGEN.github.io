import pandas as pd
render = {}

df = pd.read_csv(path+"visualizacion/antro_freq_nutri_adulto_2012.csv")
df = df.fillna(0)
max_ = 160
imc_cat_index = {
    0:"ND",
    1:"Bajo Peso",
    2:"Normal",
    3:"Sobrepeso",
    4:"Obesidad"}
   
def proccess_data(genero):
    ob = {}
    sp = {}
    nm = {}
    bp = {}
    for d in df[df['sexo'] == genero].iterrows():
        try:
            index = int(d[1]['imc_cat'])
        except ValueError:
            index = 0
                       
       
    for i in xrange(1, max_):
        if index == 4:
            if not i in ob:
                ob[i] = d[1][str(i)]
            else:
                ob[i] = ob[i] + d[1][str(i)]
        elif index == 3:
            if not i in sp:
                sp[i] = d[1][str(i)]
            else:
                sp[i] = sp[i] + d[1][str(i)]
        elif index == 2:
            if not i in nm:
                nm[i] = d[1][str(i)]
            else:
                nm[i] = nm[i] + d[1][str(i)]
        elif index == 1:
            if not i in bp:
                bp[i] = d[1][str(i)]
            else:
                bp[i] = bp[i] + d[1][str(i)]

    n_ob, n_sp, n_nm, n_bp = [], [], [], []
    for k, v in ob.items():
        print k
        n_ob.append({"y": v, "x": k})
    for k, v in sp.items():
        n_sp.append({"y": v, "x": k})
    for k, v in nm.items():
        n_nm.append({"y": v, "x": k})
    for k, v in bp.items():
        n_bp.append({"y": v, "x": k})
    t = min(n_ob, n_sp, n_nm, n_bp)
    tl = len(t)

    return n_ob[:tl], n_sp[:tl], n_nm[:tl], n_bp[:tl]
   

n_ob_H, n_sp_H, n_nm_H, n_bp_H = proccess_data(1)
n_ob_M, n_sp_M, n_nm_M, n_bp_M = proccess_data(2)
